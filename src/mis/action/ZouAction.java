package mis.action;

import com.opensymphony.xwork2.ActionSupport;
import org.apache.struts2.interceptor.ServletRequestAware;

import javax.servlet.http.HttpServletRequest;

/**
 * Created by Administrator on 2017/11/30.
 */
public class ZouAction extends ActionSupport implements ServletRequestAware {

    private HttpServletRequest request;
    @Override
    public void setServletRequest(HttpServletRequest request) {
        this.request =request;
    }
    // 最新数据
    public String newData(){

        return "newData";
    }
    public String troubleData(){

        return "troubleData";
    }
    public String historyData(){
        return "historyData";
    }
    public String trainAnalyse(){

        return "trainAnaylse";
    }
}
