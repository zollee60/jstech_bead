module.exports = class Base64Service {

    static encode(string){
        return Buffer.from(string).toString('base64');
    }

    static decode(string){
        return Buffer.from(string, "base64").toString('utf-8');
    }

}