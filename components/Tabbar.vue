<template>
	<view class="absolute bottom-0 tabbar-bg w-full h-[60px] flex items-center text-center z-20">
		<view class="flex-1  relative" v-for="menu in menus" @click="onClickMenu(menu)">
			<view class="flex flex-col items-center" v-if="!menu.big">
				<view class="h-4 w-5 mb-2">
					<image :src="$utils.getImageUrl(route === menu.url?menu.activeIcon:menu.icon)" mode="heightFix"
						class="h-5"></image>
				</view>
				<view class="tabbar-text" :class="{'text-active':route === menu.url}">
					{{menu.title}}
				</view>
			</view>
			<view v-else class="relative h-[60px]">
				<image :src="$utils.getImageUrl(menu.icon)" mode="heightFix"
					class="absolute h-20 -top-8 left-1/2 -translate-x-1/2"></image>
			</view>
		</view>
	</view>
</template>

<script lang="js" setup>
	import {
		computed,
		onMounted,
		ref
	} from 'vue';
	import {
		useI18n
	} from "vue-i18n"

	const {
		t
	} = useI18n();
	const route = ref(null);

	const menus = computed(() => [{
		title: t('首页'),
		icon: 'tabbar/home_n.svg',
		activeIcon: 'tabbar/home_s.svg',
		url: 'pages/index/index'
	}, {
		title: t('活动'),
		icon: 'tabbar/activity_n.svg',
		activeIcon: 'tabbar/activity_s.svg',
		url: 'pages/activity/index'
	}, {
		title: t('客服'),
		icon: 'tabbar/service.png',
		activeIcon: 'tabbar/service.png',
		big: true,
		url: 'pages/service/index'
	}, {
		title: t('代理'),
		icon: 'tabbar/proxy_n.svg',
		activeIcon: 'tabbar/proxy_s.svg',
		url: 'pages/proxy/index'
	}, {
		title: t('我的'),
		icon: 'tabbar/mine_n.svg',
		activeIcon: 'tabbar/mine_s.svg',
		url: 'pages/mine/index'
	}])

	onMounted(() => {
		const pages = getCurrentPages();
		const currentPage = pages[pages.length - 1];
		route.value = currentPage.route;
	});

	function onClickMenu(menu) {
		if (route.value === menu.url) return;
		uni.navigateTo({
			url: `/${menu.url}`
		});
	}
</script>

<style scoped>
	.tabbar-bg {
		background: url(@/static/images/tabbar/tabbar-bg.png);
		background-repeat: no-repeat;
		background-size: 100% auto;
	}

	.tabbar-text {
		font-size: 10px;
		color: #BABDFFCC;
	}

	.text-active {
		background-image: linear-gradient(-46deg, #5844ff, #b42dff);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
</style>