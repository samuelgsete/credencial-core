const DEFAULT_TAKE = 5;

export class FilterSearch {

    public word: string;
    public page: number;
    public take: number;
    
    public constructor(_word: string, _page: number, _take: number) {
        this.word =  (_word == null || _word == "")? "%%" : `%${_word}%`;
        this.page = _page <=0 ? 1: _page;
        this.take = (_take == 0 || _take == null )? DEFAULT_TAKE : _take;
    }

    public get skip(): number {
        return (this.page - 1) * this.take;
    }
}