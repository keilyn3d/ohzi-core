export class SDFText {
    constructor(glyph_layout: any, text?: string);
    glyph_layout: any;
    glyphs: any[];
    glyph_is_dirty: boolean;
    matrix_is_dirty: boolean;
    color_is_dirty: boolean;
    position: Vector3;
    quaternion: Quaternion;
    scale: Vector3;
    matrix: Matrix4;
    color: Color;
    pivot_point: Vector2;
    __opacity: number;
    __text: string;
    set text(arg: string);
    get text(): string;
    update_matrix(): void;
    clear_glyph_dirty(): void;
    clear_color_dirty(): void;
    set_rotation(orientation?: number, tilt?: number): void;
    set_position(pos: any): void;
    set_size(size: any): void;
    set_color(col: any): void;
    set_pivot(pivot: any): void;
    set opacity(arg: number);
    get opacity(): number;
    update_glyphs(): void;
    __generate_glyphs(text: any): void;
}
import { Vector3 } from "three/src/math/Vector3";
import { Quaternion } from "three/src/math/Quaternion";
import { Matrix4 } from "three/src/math/Matrix4";
import { Color } from "three/src/math/Color";
import { Vector2 } from "three/src/math/Vector2";
