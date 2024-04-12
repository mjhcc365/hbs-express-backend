https://www.sjkjc.com/posts/install-mongodb-on-macos/#:~:text=%E5%9C%A8%20MacOS%20%E4%B8%AD%E5%AE%89%E8%A3%85%E5%92%8C%E9%85%8D%E7%BD%AE%20MongoDB%201%20%E5%85%88%E5%86%B3%E6%9D%A1%E4%BB%B6%20%E5%9C%A8%E5%BC%80%E5%A7%8B%E5%AE%89%E8%A3%85%E5%92%8C%E9%85%8D%E7%BD%AE%20MongoDB,MongoDB%20%E8%A6%81%E6%93%8D%E4%BD%9C%20MongoDB%EF%BC%8C%E6%82%A8%E5%8F%AF%E4%BB%A5%E4%BD%BF%E7%94%A8%20MongoDB%20%E7%9A%84%20shell%20%E5%91%BD%E4%BB%A4%EF%BC%8C%E5%9C%A8%E7%BB%88%E7%AB%AF%E4%B8%AD%E8%BE%93%E5%85%A5%E5%90%84%E7%A7%8D%E6%93%8D%E4%BD%9C%E6%95%B0%E6%8D%AE%E5%BA%93%E7%9A%84%E5%91%BD%E4%BB%A4%E3%80%82%20

## 配置 MongoDB

默认 storage.dbPath 存储的文件夹 /usr/local/var/mongodb
默认 ip 地址 net.bindIp：127.0.0.1
security.authorization 创建一个管理员用户和一个普通用户，分别用于管理数据库和访问数据。

## 命令

brew services start mongodb-community ==> 即可开启 mongodb
==> 安装过程需要更新 homebrew
==>
brew services restart mongodb-community

## 语法

```js
// 增
db.collection.insertOne({ key: value });
db.collection.insertMany([{ key1: value1 }, { key2: value2 }]);

// 删
// 删除匹配条件的第一个文档
db.collection.deleteOne({ key: value });
// 删除匹配条件的所有文档
db.collection.deleteMany({ key: value });

// 查
// 查询所有文档
db.collection.find();
// 根据条件查询文档
db.collection.find({ key: value });
// 查询指定字段的文档
db.collection.find({}, { key: 1 });
// 查询第一个匹配的文档
db.collection.findOne({ key: value });

// 改
// 更新匹配条件的第一个文档
db.collection.updateOne({ key: value }, { $set: { newKey: newValue } });
// 更新匹配条件的所有文档
db.collection.updateMany({ key: value }, { $set: { newKey: newValue } });
```
