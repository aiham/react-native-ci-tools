/*
 * Apply updates (edit plist files - IN MEMORY)
 */
const applyUpdates = (
  fileObject,
  newDisplayName,
  newBundleId,
  newBundleName,
  newBuildNumber
) => new Promise((resolve, reject) => {
    try {
        //update CFBundleName
        if (fileObject.content.CFBundleName !== undefined) {
            fileObject.content.CFBundleName = newBundleName || newBundleId;
        }

        // update CFBundleIdentifier
        if (fileObject.content.CFBundleIdentifier !== undefined) {
            fileObject.content.CFBundleIdentifier = newBundleId;
        }

        // update CFBundleDisplayName
        if (fileObject.content.CFBundleDisplayName !== undefined) {
            fileObject.content.CFBundleDisplayName = newDisplayName;
        }

        // update CFBundleVersion
        if (fileObject.content.CFBundleVersion !== undefined) {
            fileObject.content.CFBundleVersion = newBuildNumber;
        }

        resolve(
            {
                path: fileObject.path,
                content: fileObject.content
            }
        )
    }
    catch (updateError) {
        reject(updateError)
    }
});

module.exports = { applyUpdates };