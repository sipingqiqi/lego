<template>
    <!-- 构建单按钮样式（充满效果）-->
    <s-cell v-if='elements.length === 1 && filled === "true"' :height='height' :bgcolor='bgcolor' :border-top='borderTop'>
        <s-flex-column align='center'>
            <b-rectangular-button :id='elements[0].id' size="34" height="3.157895" color="white" :disabled="elements[0].disabled" filled="true">{{elements[0].text}}</b-rectangular-button>
        </s-flex-column>
    </s-cell>

    <!-- 构建单按钮样式（留白效果）-->
    <s-cell v-else-if='elements.length === 1 && filled !== "true"' :height='height' :bgcolor='bgcolor' :border-top='borderTop'>
        <s-flex-column></s-flex-column>
        <s-column width='12.894736' align='center'>
            <b-button :id='elements[0].id' size='34' color='white' height='2.105263' :disabled="elements[0].disabled" filled='true'>{{elements[0].text}}</b-button>
        </s-column>
        <s-flex-column></s-flex-column>
    </s-cell>

    <!-- 构建双按钮样式（充满效果）-->
    <s-cell v-else-if='elements.length === 2 && filled === "true"' :height='height' :bgcolor='bgcolor' :border-top='borderTop'>
        <s-flex-column>
            <b-rectangular-button :id='elements[0].id' size="34" height="3.157895" :disabled="elements[0].disabled" filled="false">{{elements[0].text}}</b-rectangular-button>
        </s-flex-column>
        <s-flex-column>
            <b-rectangular-button :id='elements[1].id' size="34" height="3.157895" :disabled="elements[1].disabled" filled="true">{{elements[1].text}}</b-rectangular-button>
        </s-flex-column>
    </s-cell>

    <!-- 构建双按钮样式（留白效果）-->
    <s-cell v-else-if='elements.length === 2 && filled !== "true"' :height='height' :bgcolor='bgcolor' :border-top='borderTop'>
        <s-flex-column></s-flex-column>
        <s-column width='8.947368'>
            <b-button :id='elements[0].id' size='34' height='2.105263' :disabled="elements[0].disabled" filled='false'>{{elements[0].text}}</b-button>
        </s-column>
        <s-column width='.789474'></s-column>
        <s-column width='8.947368'>
            <b-button :id='elements[1].id' size='34' height='2.105263' :disabled="elements[1].disabled" filled='true'>{{elements[1].text}}</b-button>
        </s-column>
        <s-flex-column></s-flex-column>
    </s-cell>

    <!-- 构建三按钮样式（充满效果）-->
    <s-cell v-else-if='elements.length === 3' :height='height' :bgcolor='bgcolor' :border-top='borderTop'>
        <s-flex-column>
            <b-rectangular-button :id='elements[0].id' size="34" height="3.157895" :disabled="elements[0].disabled" filled="false">{{elements[0].text}}</b-rectangular-button>
        </s-flex-column>
        <s-column width='5'>
            <b-rectangular-button :id='elements[1].id' size="34" height="3.157895" :disabled="elements[1].disabled" bgcolor="cream" color="light" filled="false">{{elements[1].text}}</b-rectangular-button>
        </s-column>
        <s-column width='5'>
            <b-rectangular-button :id='elements[2].id' size="34" height="3.157895" :disabled="elements[2].disabled" filled="true">{{elements[2].text}}</b-rectangular-button>
        </s-column>
    </s-cell>

    <!-- 误用提示 -->
    <s-cell v-else :height='height' :bgcolor='bgcolor'>
        <s-flex-column>
            <b-text>参数不合法</b-text>
        </s-flex-column>
    </s-cell>
</template>
<script>
    export default {
        props: [ 'bgcolor', 'filled', 'borderTop' ],

        data: function () {
            var slots = this.$slots.default,
                elems = [], options, children;

            slots.forEach(function (s) {
                options = s.componentOptions;
                if (options && options.propsData && options.propsData.id) {
                    children = options.children;
                    if (children.length > 0 && typeof children[0].text !== 'undefined') {
                        elems.push({
                            id: options.propsData.id,
                            text: children[0].text,
                            disabled: options.propsData.disabled
                        });
                    }
                }
            });

            return {
                height: '3.157895',
                elements: elems
            };
        }
    }
</script>