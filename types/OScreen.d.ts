export { oscreen as OScreen };
declare const oscreen: OScreen;
declare class OScreen {
    init(): void;
    width: any;
    height: any;
    position: any;
    render_width: number;
    render_height: number;
    width_height: any;
    dpr: number;
    pixel_size: any;
    update_position(x: any, y: any): void;
    update(): void;
    size_changed: boolean;
    update_size(width: any, height: any): void;
    apply_pixel_density_v2(vector2: any): any;
    apply_pixel_density(value: any): number;
    get_pixel_size(): any;
    get aspect_ratio(): number;
    get portrait(): boolean;
}
