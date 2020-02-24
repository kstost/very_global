function VeryGlobal() {
    let g_object;
    try { g_object = window; } catch { }
    try { g_object = global; } catch { }
    if (g_object) {
        if (!g_object.custom_box) {
            g_object.custom_box = {};
        }
        this.storage = g_object.custom_box;
    }
}
VeryGlobal.prototype = {
    clear() {
        Object.keys(this.storage).forEach(key => {
            delete this.storage[key];
        });
    },
    keyList() {
        return Object.keys(this.storage);
    },
    get(key) {
        return this.storage[key];
    },
    set(key, value) {
        this.storage[key] = value;
        if (value === undefined) {
            delete this.storage[key];
        }
    },
    unique() {
        let keyname = 'unique_number_key';
        let data = this.get(keyname);
        if (data === undefined) { data = 0; }
        data += 1;
        this.set(keyname, data);
        return data;
    },
};
if (typeof module === "object" && typeof module.exports === "object") {
    // export default new VeryGlobal();
    module.exports = new VeryGlobal();
}
