const dict = $context.query;
const data = dict.data;
var configFile = $file.read("./configs/zotconfig.json");
var config = JSON.parse(configFile.string);

if (typeof data === "object") {
  for (let filename in data) {
    var dataKey = data[filename];
  }
} else {
  var dataKey = data;
}

var resp = await $http.get({
  url: `https://api.zotero.org/users/${config.userid}/items/${dataKey}`,
  header: {
    "Zotero-API-Key": config.APIKey
  }
});
var path = resp.data.data.path;

if (path.match('^attachments')) {
  var relativePath = path.replace('attachments:', '');
} else {
  var pathList = path.split("\\");
  var pdfeURL = "";
  for (i = 0; i < pathList.length; i++) {
    var pathComponent = pathList[i];
    if (pathComponent == config.syncedFolder) {
      break;
    }
  }
  var relativePathList = pathList.slice(i, pathList.length);
  var relativePath = relativePathList.join("/");
}

var pdfeURL = encodeURI(`pdfefile:///${$l10n("SYNCED_FOLDERS")}/${relativePath}`);

const result = {
  url: pdfeURL
};

$intents.finish(result);
