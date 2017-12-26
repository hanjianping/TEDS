package mis.action;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.struts2.ServletActionContext;
import org.apache.struts2.interceptor.ServletRequestAware;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.opensymphony.xwork2.ActionSupport;

import mis.dao.TrainDao;
import mis.entity.Threshold;
import mis.util.Configuration;

@Controller
public class SettingAction  extends ActionSupport implements ServletRequestAware{

	/**
	 * 
	 */
	@Autowired
	TrainDao trainDao;
	private static final long serialVersionUID = 1L;
	private HttpServletRequest request;
	private Threshold threshold;
	private String modifyThresholdInfo;
	
	public String getModifyThresholdInfo() {
		return modifyThresholdInfo;
	}
	public void setModifyThresholdInfo(String modifyThresholdInfo) {
		this.modifyThresholdInfo = modifyThresholdInfo;
	}
	public Threshold getThreshold() {
		return threshold;
	}
	public void setThreshold(Threshold threshold) {
		this.threshold = threshold;
	}
	@Override
	public void setServletRequest(HttpServletRequest request) {
		this.request=request;
		
	}
	public String updatePwd (){
		
		
		return "updatePwd";
	}
	public String trainNo(){
		
		return "trainNO";
	}
	public String server(){
		
		
		return "server";
	}
	public String threshold(){
		HttpServletResponse response=ServletActionContext.getResponse();
		response.setCharacterEncoding("utf-8");
		HttpSession session=request.getSession();
		Threshold threshold=new Threshold();
		threshold=trainDao.findThreshold();
		session.setAttribute("threshold", threshold);
		return "threshold";
	}
	public String modifyThreshold(){
		HttpServletResponse response=ServletActionContext.getResponse();
		response.setCharacterEncoding("utf-8");
		if(threshold!=null){
			trainDao.modifyThreshold(threshold);
			modifyThresholdInfo="true";
		}
		Threshold threshold1=new Threshold();
		threshold1=trainDao.findThreshold();
        Configuration.setPressThreshold(threshold1.getPressThreshold());
        Configuration.setCpuTempThreshold(threshold1.getCpuTempThreshold());
        Configuration.setDevTempBThreshold(threshold1.getDevTempBThreshold());
        Configuration.setDevTempThreshold(threshold1.getDevTempThreshold());
        Configuration.setCenterBiaseThreshold(threshold1.getCenterBiaseThreshold());
        Configuration.setLRAangleThreshold(threshold1.getlRAangleThreshold());
        Configuration.setFBAangleThreshold(threshold1.getfBAangleThreshold());
        Configuration.setFirstLeftThreshold(threshold1.getFirstLeftThreshold());
        Configuration.setSecondLeftThreshold(threshold1.getSecondLeftThreshold());
		return "modifyThreshold";
	}
}
