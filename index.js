function VeryGlobal() {
    if (!window.custom_box) {
        window.custom_box = {};
    }
    this.storage = window.custom_box;
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

export default new VeryGlobal();
