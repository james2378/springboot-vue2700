const base = {
    get() {
        return {
            url : "http://localhost:8080/jiaoxueziyuan/",
            name: "jiaoxueziyuan",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/jiaoxueziyuan/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "小码创客教育教学资源库"
        } 
    }
}
export default base
