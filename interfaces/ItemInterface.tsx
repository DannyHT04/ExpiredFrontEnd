export default interface iAddItem {
    Id: number,
    UserId: number,
    GroupId: number,
    ProductName: string,
    DateOfExpiration: string,
    Owner: string,
    ProductImage: string,
    isGroceryList: boolean,
    isDeleted: boolean
}