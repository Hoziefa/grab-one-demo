import { data } from '../data/grabOne.json';
import { idGenerator } from '../utils/misc';
import { ISectionDataItem } from '../types';

class DataProvider {
    private static instance: DataProvider;

    private constructor() {}

    public static getInstance(): DataProvider {
        if (!DataProvider.instance) DataProvider.instance = new DataProvider();

        return DataProvider.instance;
    }

    public getSectionData<K extends keyof typeof data>(sectionName: K): typeof data[K] {
        return { ...data[sectionName], items: data[sectionName].items.map((item: ISectionDataItem): ISectionDataItem => ({ ...item, id: idGenerator(sectionName) })) };
    }
}

export const dataProvider = DataProvider.getInstance();
