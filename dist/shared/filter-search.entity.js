"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterSearch = void 0;
const DEFAULT_TAKE = 5;
class FilterSearch {
    constructor(_word, _page, _take) {
        this.word = (_word == null || _word == "") ? "%%" : `%${_word}%`;
        this.page = _page <= 0 ? 1 : _page;
        this.take = (_take == 0 || _take == null) ? DEFAULT_TAKE : _take;
    }
    get skip() {
        return (this.page - 1) * this.take;
    }
}
exports.FilterSearch = FilterSearch;
//# sourceMappingURL=filter-search.entity.js.map