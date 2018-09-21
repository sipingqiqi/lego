var fs     = require('fs'),
    marked = require('marked'),
    source = process.argv[2] || 'src',
    target = process.argv[3] || 'docs';

/**
 *  { 
 *      root: [{
 *          isDirectory: true / false,
 *          children: [],
 *          name: 'filename',
 *          path: 'full/path/filename.md'
 *      }] 
 *  }
 */

createDocuments(
    getAllDirectories(source), target
);


function getAllDirectories(path) {
    return {
        root: getSubDirectories(path)
    }
}

function getSubDirectories (path) {
    var list = [];

    fs.readdirSync(path).forEach(function (item) {
        var fullpath = path + '/' + item;

        if (fs.statSync(fullpath).isDirectory()) {
            var children = getSubDirectories(fullpath);
            children.length > 0 && list.push({
                isDirectory: true,
                children: children,
                name: item,
                path: fullpath
            });
        } else {
            /(\.md)+$/i.test(item) && list.push({
                isDirectory: false,
                name: item,
                path: fullpath
            });
        }
    });

    return list;
}

function createDocuments (directories, path) {
    createSubDirectory(directories.root, path);
}

function createSubDirectory (directory, path) {
    !fs.existsSync(path) && fs.mkdirSync(path);

    directory.forEach(function (item) {
        if (item.isDirectory) {
            createSubDirectory(item.children, path + '/' + item.name);
        } else {
            md2html(item.path, path + '/' + item.name);
        }
    });
}

function md2html (source, target) {

    fs.readFile(source, 'utf-8', function (err, data) {
        err ? console.log(err) : (function () {

            // 将 .md 文件转换成HTML文件
            var ab = marked(data.toString());

            // 将转换成HTML文件保存到新的路径下
            fs.writeFile(target + '.html', ab, function (err) {
                err ? console.log(err) : console.log('Create ' + target + '.html');
            });
        })();
    });
}