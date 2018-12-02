const OSS = require('ali-oss');
const glob = require("glob")
const path = require("path");

module.exports = class OSSFactory {

	constructor({ region = 'oss-cn-beijing', accessKeyId = '', accessKeySecret = '', bucket = '' }) {

		this.client = new OSS({
			region,
			accessKeyId,
			accessKeySecret,
			bucket,
		});
	}

	async list() {
		return await this.client.list();
	}


	async delete(name) {
		try {
			return await this.client.delete(name);
		} catch (err) {
			console.log(err);
		}
	}

	async drop(nameMulti = []) {
		try {
			return await this.client.deleteMulti(nameMulti, {
				quiet: true
			});
		} catch (err) {
			console.log(err);
		}
	}

	async put(name, file) {
		try {
			return await this.client.put(name, file);
		} catch (err) {
			console.log(err);
		}
	}

}