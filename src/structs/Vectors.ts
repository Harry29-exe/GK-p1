export class Vec3d {
    public d: [number, number, number, number]

    constructor(d: [number, number, number, number]) {
        this.d = d;
    }

    public static empty(): Vec3d {
        return new Vec3d([0,0,0,1]);
    }

    public static from(x: number, y: number, z: number, w?: number): Vec3d {
        return new Vec3d([x,y,z,w?w:1]);
    }

    public add(v: Vec3d): Vec3d {
        return Vec3d.from(this.x + v.x, this.y +v.y, this.z + v.z, this.w);
    }

    public subtract(v: Vec3d): Vec3d {
        return Vec3d.from(this.x - v.x, this.y - v.y, this.z - v.z, this.w);
    }

    public multiply(num: number): Vec3d {
        return Vec3d.from(this.x * num, this.y * num, this.z*num,this.w);
    }

    public divide(num: number): Vec3d {
        return Vec3d.from(this.x / num, this.y / num, this.z/num, this.w);
    }

    public dotProduct(v: Vec3d): number {
        return this.x * v.x + this.y * v.y + this.z * v.z;
    }

    public length(): number {
        return Math.sqrt(this.dotProduct(this))
    }

    public normalise(): Vec3d {
        const len = this.length();
        if (len != 0) {
            return Vec3d.from(this.x / len, this.y / len, this.z / len, this.w);
        }
        return Vec3d.from(0,0,0,this.w);
    }

    public crossProduct(v: Vec3d): Vec3d {
        const nv = Vec3d.empty();
        nv.x = this.y * v.z - this.z * v.y;
        nv.y = this.z * v.x - this.x * v.z;
        nv.z = this.x * v.y - this.y * v.x;

        return nv;
    }

    //experimental
    public rotateX(origin: Vec3d, rad: number): Vec3d {
        const temp1 = Vec3d.empty();
        const temp2 = Vec3d.empty();
        temp1.x = this.x - origin.x;
        temp1.y = this.y - origin.y;
        temp1.z = this.z - origin.z;

        temp2.x = temp1.x;
        temp2.y = temp1.y * Math.cos(rad) - temp1.z * Math.sin(rad)
        temp2.z = temp1.y * Math.sin(rad) + temp1.z * Math.cos(rad)

        return Vec3d.from(temp2.x + origin.x, temp2.y + origin.y, temp2.z + origin.z);
    }

    public rotateY(origin: Vec3d, rad: number): Vec3d {
        const temp1 = Vec3d.empty();
        const temp2 = Vec3d.empty();
        temp1.x = this.x - origin.x;
        temp1.y = this.y - origin.y;
        temp1.z = this.z - origin.z;

        temp2.x = temp1.z * Math.sin(rad) + temp1.x * Math.cos(rad);
        temp2.y = temp1.y;
        temp2.z = temp1.z * Math.cos(rad) - temp1.x + Math.sin(rad);

        return Vec3d.from(temp2.x + origin.x, temp2.y + origin.y, temp2.z + origin.z);
    }

    public rotateZ(origin: Vec3d, rad: number): Vec3d {
        const temp1 = Vec3d.empty();
        const temp2 = Vec3d.empty();
        temp1.x = this.x - origin.x;
        temp1.y = this.y - origin.y;
        temp1.z = this.z - origin.z;

        temp2.x = temp1.x * Math.cos(rad) - temp1.y * Math.sin(rad);
        temp2.y = temp1.x * Math.sin(rad) + temp1.y * Math.cos(rad)
        temp2.z = temp1.z

        return Vec3d.from(temp2.x + origin.x, temp2.y + origin.y, temp2.z + origin.z);
    }

    public get x(): number {
        return this.d[0]
    }

    public set x(x: number) {
        this.d[0] = x;
    }

    public get y(): number {
        return this.d[1]
    }

    public set y(y: number) {
        this.d[1] = y;
    }

    public get z(): number {
        return this.d[2]
    }

    public set z(z: number) {
        this.d[2] = z;
    }

    public get w(): number {
        return this.d[3]
    }

    public set w(w: number) {
        this.d[3] = w;
    }

}
