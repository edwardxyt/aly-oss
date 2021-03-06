const OSS = require("ali-oss");
const glob = require("glob");
const path = require("path");
const fs = require("fs");

module.exports = class OSSFactory {
  constructor({
    region = "oss-cn-beijing",
    accessKeyId = "",
    accessKeySecret = "",
    bucket = ""
  }) {
    this.client = new OSS({
      region,
      accessKeyId,
      accessKeySecret,
      bucket
    });
  }

  async getStreamOne(name) {
    try {
      let stream = await client.getStream(name);
      return stream;
      stream.pipe(res); //将可读流写入response
    } catch (err) {
      console.log(err);
    }
  }

  async list() {
    // 列出前缀为'my-'且在'my-object'之后的文件
    // prefix: 'my-',
    // marker: 'my-object'
    return await this.client.list({

    });
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

  async putStream(name, file) {
    try {
      // use 'chunked encoding'
      let stream = fs.createReadStream(file);
      return await this.client.putStream(name, stream);

      // don't use 'chunked encoding'
      // let stream = fs.createReadStream(file);
      // let size = fs.statSync(file).size;
      // let result = await this.client.putStream(
      // 	name, stream, { contentLength: size });
      // console.log(result);
    } catch (e) {
      console.log(e);
    }
  }
};
