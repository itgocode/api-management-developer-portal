import { Contract } from "@paperbits/common";

/**
 * Data contact (data layer) that defines how widget configuration gets persisted.
 */
export interface HTMLInjectionWidgetContract extends Contract {
    htmlCode: string;
    htmlCodeHeight: number;
}