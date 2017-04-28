import Vue from 'vue';
export {
    focus,
}

// 自定义聚焦指令
const focus = Vue.directive('focus', {
    // 当绑定元素插入到 DOM 中。
    inserted: function (el) {
        // 聚焦元素
        el.focus();
        el.style.background = 'rgba(51, 51, 51, 0.22)';
    }
});


const red = Vue.directive('red', {
    // 当绑定元素插入到 DOM 中。
    inserted: function (el) {
        el.style.color = 'red';
    }
});
