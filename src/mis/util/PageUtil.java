package mis.util;

/**
 * 分页工具类
 * @author Administrator
 *
 */
public class PageUtil {

	/**
	 * 生成分页代码
	 * @param targetUrl 目标地址
	 * @param totalNum 总记录数
	 * @param currentPage 当前页
	 * @param pageSize 每页大小
	 * @return
	 */
	public static String genPagination(String targetUrl,long totalNum,int currentPage,int pageSize,String param){
		long totalPage=totalNum%pageSize==0?totalNum/pageSize:totalNum/pageSize+1;
		if(totalPage==0){
			return "<div class=message>共&nbsp;<i class=blue></i>&nbsp;条记录，当前显示第&nbsp;<i class=blue>$</i>&nbsp;页， 每页显示&nbsp;<i class=blue>&nbsp;条</i></div><ul class=paginList><li class=paginItem><a class=pagepre href=''></a></li><li class=paginItem><a href=''></a></li><li class=paginItem><a href=''></a></li><li class=paginItem><a class=pagenxt href=''></a></li></ul>";
			
		}else{
			StringBuffer pageCode=new StringBuffer();
			pageCode.append("<div class=message>共&nbsp;<i class=blue>"+totalNum+"</i>&nbsp;条记录，当前显示第&nbsp;<i class=blue>"+totalPage+"</i>&nbsp;页，每页显示&nbsp;<i class=blue>&nbsp;"+pageSize+"条</i></div><ul class=paginList>");
			if (currentPage==1) {
				pageCode.append("<li class=paginItem class=disabled><a>First</a></li>");
			} else {
				pageCode.append("<li class=paginItem><a href='"+targetUrl+"?page=1&"+param+"'>First</a></li>");
			}
			if(currentPage==1){
				pageCode.append("<li class=paginItem class=disabled><a>Previous</a></li>");
			}else {
				pageCode.append("<li class=paginItem><a href='"+targetUrl+"?page="+(currentPage-1)+"&"+param+"'>Previous</a></li>");			
			}
			for(int i=currentPage-2;i<=currentPage+2;i++){
				if(i<1||i>totalPage){
					continue;
				}
				if(i==currentPage){
					pageCode.append("<li class=paginItem class=active><a>"+i+"</a></li>");		
				}else{
					pageCode.append("<li class=paginItem><a href='"+targetUrl+"?page="+i+"&"+param+"'>"+i+"</a></li>");	
				}
			}
			if(currentPage==totalPage){
				pageCode.append("<li class=paginItem class=disabled><a>Next</a></li>");	
			}else {
				pageCode.append("<li class=paginItem ><a href='"+targetUrl+"?page="+(currentPage+1)+"&"+param+"'>Next</a></li>");	
			}
			if (currentPage==totalPage) {
				pageCode.append("<li class=paginItem class=disabled><a>Last</a></li>");
			} else {
				pageCode.append("<li class=paginItem><a href='"+targetUrl+"?page="+totalPage+"&"+param+"'>Last</a></li>");
			}
			return pageCode.toString();
		}
	
	}
	
	public static String genPaginationNoParam(String targetUrl,long totalNum,int currentPage,int pageSize){
		long totalPage=totalNum%pageSize==0?totalNum/pageSize:totalNum/pageSize+1;
		if(totalPage==0){
			return "<div class=message>共&nbsp;<i class=blue></i>&nbsp;条记录，当前显示第&nbsp;<i class=blue>$</i>&nbsp;页， 每页显示&nbsp;<i class=blue>&nbsp;条</i></div><ul class=paginList><li class=paginItem><a class=pagepre href=''></a></li><li class=paginItem><a href=''></a></li><li class=paginItem><a href=''></a></li><li class=paginItem><a class=pagenxt href=''></a></li></ul>";
		}else{
			StringBuffer pageCode=new StringBuffer();
			pageCode.append("<li class=paginItem><a href='"+targetUrl+"?page=1'>First</a></li>");
			if(currentPage>1){
				pageCode.append("<li class=paginItem><a href='"+targetUrl+"?page="+(currentPage-1)+"'>Previous</a></li>");			
			}
			for(int i=currentPage-2;i<=currentPage+2;i++){
				if(i<1||i>totalPage){
					continue;
				}
				if(i==currentPage){
					pageCode.append("<li class=paginItem>"+i+"</li>");		
				}else{
					pageCode.append("<li class=paginItem><a href='"+targetUrl+"?page="+i+"'>"+i+"</a></li>");	
				}
			}
			if(currentPage<totalPage){
				pageCode.append("<li class=paginItem><a href='"+targetUrl+"?page="+(currentPage+1)+"'>Next</a></li>");		
			}
			pageCode.append("<li class=paginItem><a href='"+targetUrl+"?page="+totalPage+"'>Last</a></li>");
			return pageCode.toString();
		}
	}
}
