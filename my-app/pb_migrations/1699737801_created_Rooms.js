/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "n6blxqewx3xtlyw",
    "created": "2023-11-11 21:23:21.602Z",
    "updated": "2023-11-11 21:23:21.602Z",
    "name": "Rooms",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "rbvpbm5k",
        "name": "Room_Number",
        "type": "number",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": true
        }
      },
      {
        "system": false,
        "id": "jx47vfyu",
        "name": "Room_Type",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("n6blxqewx3xtlyw");

  return dao.deleteCollection(collection);
})
