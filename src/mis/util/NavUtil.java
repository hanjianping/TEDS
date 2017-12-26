package mis.util;

/**
 * 导航工具类
 * @author Administrator
 *
 */
public class NavUtil {

	/**
	 * 生成导航代码
	 * @param subName
	 * @return
	 */
	public static String genNavCode(String subName){
		StringBuffer navCode=new StringBuffer();
		navCode.append("Your Loaction：");
		navCode.append("<a href='index.jsp'>index</a>&nbsp;");
		navCode.append("&gt; ");
		navCode.append(subName);
		return navCode.toString();
	}
}
