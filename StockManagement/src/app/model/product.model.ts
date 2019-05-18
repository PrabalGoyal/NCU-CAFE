export class Product {
    constructor(
    public id?: number,
    public name?: string,
    public category?: string,
    public description?: string,
    public price?: number,
    public image?: string,
    public producttype?: string,
    public stockentrydate?: Date,
    public remaininginventory?:string,
    public companyname?: string,
    ) { }
   }