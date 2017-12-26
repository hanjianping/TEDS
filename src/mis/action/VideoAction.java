package mis.action;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.struts2.ServletActionContext;
import org.apache.struts2.interceptor.ServletRequestAware;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.opensymphony.xwork2.ActionSupport;

import mis.dao.TrainDao;
import mis.entity.PageBean;
import mis.entity.Train;
import mis.entity.Video;
import mis.util.Configuration;
@Controller
public class VideoAction extends ActionSupport implements ServletRequestAware{

	@Autowired
	TrainDao trainDao;
	private static final long serialVersionUID = 1L;
	private HttpServletRequest request;
	private String trainId;
	private List<Video> vd=new ArrayList<Video>();
	private String lastDate;
	private String firstDate;
	private String pageCode;
	private String isCurrentData;
	
	public String getIsCurrentData() {
		return isCurrentData;
	}
	public void setIsCurrentData(String isCurrentData) {
		this.isCurrentData = isCurrentData;
	}
	public String getPageCode() {
		return pageCode;
	}
	public void setPageCode(String pageCode) {
		this.pageCode = pageCode;
	}
	public String getLastDate() {
		return lastDate;
	}
	public void setLastDate(String lastDate) {
		this.lastDate = lastDate;
	}
	public String getFirstDate() {
		return firstDate;
	}
	public void setFirstDate(String firstDate) {
		this.firstDate = firstDate;
	}
	public List<Video> getVd() {
		return vd;
	}
	public void setVd(List<Video> vd) {
		this.vd = vd;
	}
	public String getTrainId() {
		return trainId;
	}
	public void setTrainId(String trainId) {
		this.trainId = trainId;
	}
	@Override
	public void setServletRequest(HttpServletRequest request) {
		this.request=request;
	}
	//视频数据 当日视频
	public String current(){
		HttpServletResponse response=ServletActionContext.getResponse();
		response.setCharacterEncoding("utf-8");
		HttpSession session=request.getSession();
		Integer pageNum=0;
		if(pageCode==null){
			pageNum=1;
		}else{
			pageNum=Integer.parseInt(pageCode);
		}
		int pageSize=Configuration.getPageVideoSize();
		isCurrentData="1";
		List <Train> showselectTrainNO=new ArrayList<Train>();
		showselectTrainNO=trainDao.showselectTrainNO();
		session.setAttribute("showselectTrainNO", showselectTrainNO);
		vd=trainDao.showCurrentVideo((pageNum-1)*pageSize,pageSize,trainId,null,null,isCurrentData);
		int count=trainDao.getVideoCount((pageNum-1)*pageSize,pageSize,trainId, null, null,isCurrentData);
		PageBean pageBean=new PageBean(pageSize,pageNum,vd,count);
		session.setAttribute("pageBean", pageBean);
		return "current";
	} 
	//视频数据历史数据
	public String history(){
		HttpServletResponse response=ServletActionContext.getResponse();
		response.setCharacterEncoding("utf-8");
		HttpSession session=request.getSession();
		Integer pageNum=0;
		if(pageCode==null){
			pageNum=1;
		}else{
			pageNum=Integer.parseInt(pageCode);
		}
		int pageSize=Configuration.getPageVideoSize();
		List <Train> showselectTrainNO=new ArrayList<Train>();
		showselectTrainNO=trainDao.showselectTrainNO();
		session.setAttribute("showselectTrainNO", showselectTrainNO);
		vd=trainDao.showCurrentVideo((pageNum-1)*pageSize,pageSize,trainId,firstDate,lastDate,null);
		int count=trainDao.getVideoCount((pageNum-1)*pageSize,pageSize,trainId, firstDate, lastDate,null);
		PageBean pageBean=new PageBean(pageSize,pageNum,vd,count);
		session.setAttribute("pageBean", pageBean);
		return "history";
	}
}
