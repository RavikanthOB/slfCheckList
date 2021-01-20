'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function TodoItem(_a) {
    var item = _a.item, onClick = _a.onClick;
    return (React__default['default'].createElement("div", { onClick: function () { return onClick(item.Id); } },
        React__default['default'].createElement("h1", { style: { textDecoration: item.isSelected ? "line-through" : "None" } }, item.name)));
}

function Todo(_a) {
    var list = _a.list, onChange = _a.onChange, currentUser = _a.currentUser;
    var updatelist = function (id) {
        var newlist = __spreadArrays(list);
        var index = newlist.findIndex(function (item) { return item.Id == id; });
        if (index > -1) {
            newlist[index].isSelected = !newlist[index].isSelected;
            newlist[index].updateBy = currentUser;
            onChange(newlist);
        }
    };
    return (React__default['default'].createElement("div", null, list.map(function (item) { return (React__default['default'].createElement(TodoItem, { onClick: updatelist, item: item })); })));
}

exports.Todo = Todo;
//# sourceMappingURL=index.js.map
