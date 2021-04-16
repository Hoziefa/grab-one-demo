export interface ISectionDataItem {
    id: string;
    figure: { badge: string | null; url: string; figcaption: string };
    details: {
        header: { title: string; vendor: { name: string; location: string | null } };
        content: { purchaseCount: number | null; price: { oldPrice: number | null; newPrice: number | null }; linkContent?: string | null; }
    }
}
