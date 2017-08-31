/*
 * Update manifest file
 */
const updateManifest = (gradelFileObj, bundleId, newBuildNumber) => new Promise((resolve, reject) => {
    try {
        resolve({
            path: gradelFileObj.path,
            content: gradelFileObj.content
              .replace(/applicationId\s"[\w|\.]+"/i, `applicationId "${bundleId}"`)
              .replace(/versionCode\s\d+/i, `versionCode ${newBuildNumber}`)
        });
    } catch (updateError) {
        reject(updateError);
    }
});

module.exports = updateManifest;
