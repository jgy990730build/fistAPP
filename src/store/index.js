import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import ajax from '../config/ajax'


Vue.use(Vuex)

const state = {
	level: '第一届', //活动周数
	itemNum: 1, // 第几题
	allTime: 0,  //总共用时
	timer: '', //定时器
	itemDetail: [{
		"topic_id": 20,
		"active_topic_id": 4,
		"type": "ONE",
		"topic_name": "孔明借完东风后由谁接应，而避过周瑜派人追杀？",
		"active_id": 1,
		"active_title": "三国知识问答",
		"active_topic_phase": "第一届",
		"active_start_time": "1479139200",
		"active_end_time": "1482163200",
		"topic_answer": [{
			"topic_answer_id": 1,
			"topic_id": 20,
			"answer_name": "关羽",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 2,
			"topic_id": 20,
			"answer_name": "赵云",
			"is_standard_answer": 1
		}, {
			"topic_answer_id": 3,
			"topic_id": 20,
			"answer_name": "张飞",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 4,
			"topic_id": 20,
			"answer_name": "魏延",
			"is_standard_answer": 0
		}]
	}, {
		"topic_id": 21,
		"active_topic_id": 4,
		"type": "MORE",
		"topic_name": "'既生瑜何生亮',是谁说的？",
		"active_id": 1,
		"active_title": "三国知识问答",
		"active_topic_phase": "第一届",
		"active_start_time": "1479139200",
		"active_end_time": "1482163200",
		"topic_answer": [{
			"topic_answer_id": 5,
			"topic_id": 21,
			"answer_name": "曹操",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 6,
			"topic_id": 21,
			"answer_name": "鲁肃",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 7,
			"topic_id": 21,
			"answer_name": "周瑜",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 8,
			"topic_id": 21,
			"answer_name": "诸葛亮",
			"is_standard_answer": 1
		}]
	}, {
		"topic_id": 21,
		"active_topic_id": 4,
		"type": "MORE",
		"topic_name": "谁用辕门射箭一记使刘备与袁术两家和解？",
		"active_id": 1,
		"active_title": "三国知识问答",
		"active_topic_phase": "第一届",
		"active_start_time": "1479139200",
		"active_end_time": "1482163200",
		"topic_answer": [{
			"topic_answer_id": 9,
			"topic_id": 21,
			"answer_name": "曹操",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 10,
			"topic_id": 21,
			"answer_name": "陈宫",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 11,
			"topic_id": 21,
			"answer_name": "简雍",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 12,
			"topic_id": 21,
			"answer_name": "吕布",
			"is_standard_answer": 1
		}]
	}, {
		"topic_id": 21,
		"active_topic_id": 4,
		"type": "MORE",
		"topic_name": "是谁推荐诸葛亮给刘备？",
		"active_id": 1,
		"active_title": "三国知识问答",
		"active_topic_phase": "第一届",
		"active_start_time": "1479139200",
		"active_end_time": "1482163200",
		"topic_answer": [{
			"topic_answer_id": 13,
			"topic_id": 21,
			"answer_name": "徐庶",
			"is_standard_answer": 1
		}, {
			"topic_answer_id": 14,
			"topic_id": 21,
			"answer_name": "司马微",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 15,
			"topic_id": 21,
			"answer_name": "赵云",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 16,
			"topic_id": 21,
			"answer_name": "刘表",
			"is_standard_answer": 0
		}]
	}, {
		"topic_id": 21,
		"active_topic_id": 4,
		"type": "MORE",
		"topic_name": "谁是卧龙和凤雏？",
		"active_id": 1,
		"active_title": "三国知识问答",
		"active_topic_phase": "第一届",
		"active_start_time": "1479139200",
		"active_end_time": "1482163200",
		"topic_answer": [{
			"topic_answer_id": 17,
			"topic_id": 21,
			"answer_name": "诸葛亮和陆逊",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 18,
			"topic_id": 21,
			"answer_name": "诸葛亮和庞统",
			"is_standard_answer": 1
		}, {
			"topic_answer_id": 19,
			"topic_id": 21,
			"answer_name": "诸葛亮和庞德",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 20,
			"topic_id": 21,
			"answer_name": "诸葛亮和郭嘉",
			"is_standard_answer": 0
		}]
	}],
	answerid: [], //答案id
}

export default new Vuex.Store({
	state,
	actions,
	mutations
})