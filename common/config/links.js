const links = {
	"settlement": {
        to: 'javascript:;',
        title: 'v5车付宝',
        options: {
        	className: 'orderList',
        	info: 'v5车付宝v5车付宝'
        },
		items :[
	        {
	            to: 'settlement-order-orderList',
	            title: '订单管理',
	            options: {
	            	className: 'orderList',
	            	info: '订单管理订单管理',
	                files: ['service', 'index'],
	            	query: "/:currentPage?start_date&end_date&order_no&car_number&status&province&city&dept&id"
	            }
	        }, {
	            to: 'settlement-order-addOrder',
	            title: '订单添加'
	        }
	    ]
	},
    "joining": {
        to: 'javascript:;',
        title: '加盟管理',
	    items :[
	        {
	            to: 'joining-order-orderList',
	            title: '订单管理'
	        },{
	            to: 'joining-deptAccountTransferDetail-index',
	            title: '刷卡明细'
	        }
	    ]
    }
}

export default links