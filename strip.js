(function() {

    startFilter();

    function startFilter() {
        if (!/^https?:\/\/\w*.google.com(?:\.[a-z]+)?/.test(location.href)) {
            return
        }

        if (!isPageReady('vsc', 'rc')) {
            setTimeout(startFilter,1000);
            return;
        }

        filterClass('vsc');
        filterClass('rc');
    }

    function isPageReady() {
        var search = document.getElementById('search')
        if (!search) {
            return false;
        }
        var vars = isPageReady.arguments;
        var sum = 0;
        for (var i = 0; i < vars.length; i++) {
            sum += document.getElementsByClassName(vars[i]).length;
        }
        if (!sum)
            return false;

        return true;
    }

    function filterClass(className) {
        var entries = search.getElementsByClassName(className)
        var len = entries.length

        for (var i = 0; i < len; i++) {
            var e = entries[i]
            var anchors = e.getElementsByTagName('a')

            anchors = Array.prototype.slice.call(anchors, 0)
            anchors.forEach(strip)
    }

    }
    function strip(a, i) {
        a.onmousedown = null
        a.removeAttribute('onmousedown')
        a.target = '_blank'
        a.removeEventListener('click')
        a.removeEventListener('onmousedown')
        if (a.hasAttribute('data-href'))
            a.href = a.data-href;
    }
})()