export function getObjects (obj:any, key:any, val:any) {
  if (val.indexOf('-') !== -1) val = val.split('-')[0].trim()
  let objects:any[] = []
  for (const i in obj) {
    if (typeof obj[i] === 'object') {
      objects = objects.concat(getObjects(obj[i], key, val))
    } else if ((i === key && obj[i] === val) || (i === key && val === '')) { //
      objects.push(obj)
    } else if (obj[i] === val && key === '') {
      if (objects.lastIndexOf(obj) === -1) {
        objects.push(obj)
      }
    }
  }
  return objects
}
