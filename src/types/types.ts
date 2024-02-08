export interface DroppedItem {
    subTab: {
        title: string;
        icon?: any;
        subList: any[];
    };
    position: { x: number; y: number };
}