export class PaginationModel<T> {
	private allItems: T[];
	private pageSize: number;

	constructor(allItems: T[], pageSize: number) {
		this.allItems = allItems;
		this.pageSize = pageSize;
	}

	getItemsFromPage(pageIndex: number): T[] {
		const start = pageIndex * this.pageSize;
		let end = (pageIndex + 1) * this.pageSize;
		if (end > this.allItems.length) {
			end = this.allItems.length;
		}
		return this.allItems.slice(start, end);
	}
    
	getPagesCount() {
		return Math.ceil(this.allItems.length / this.pageSize); 
	}
}