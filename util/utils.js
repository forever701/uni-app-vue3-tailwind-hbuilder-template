
const deviceInfo = uni.getDeviceInfo()
export const utils = {
	getImageUrl(url) {
		if (!url) return ''
		if(deviceInfo.deviceBrand){
			return `../static/images/${url}`
		}else{
			return new URL(`../static/images/${url}`, import.meta.url).href
		}
		// const path = new URL(`../static/images/${url}`, import.meta.url)
		// // ifdef H5
		// return new URL(`../static/images/${url}`, import.meta.url).href
		// // endif
		// ifdef APP-PLUS
		
		// endif
	}
}