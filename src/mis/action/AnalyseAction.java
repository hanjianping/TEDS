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
import mis.entity.Carbon;
import mis.entity.Chart_center;
import mis.entity.Chart_lean;
import mis.entity.Chart_press;
import mis.entity.Train;
import mis.util.Configuration;
import net.sf.json.JSONArray;

@Controller
public class AnalyseAction extends ActionSupport implements ServletRequestAware {

	@Autowired
	TrainDao trainDao;
	private static final long serialVersionUID = 1L;
	private HttpServletRequest request;
	private List<Train> trainList= new ArrayList<Train>();//声明一个train的集合
	private String trainId;
	private String lastDate;
	private String firstDate;
	private String duanNo;
	private String planeNo;
	private double centerBiaseThreshold=Configuration.getCenterBiaseThreshold();
	private double lRAangleThreshold=Configuration.getLRAangleThreshold();
	private double fBAangleThreshold=Configuration.getFBAangleThreshold();
	private double pressThreshold=Configuration.getPressThreshold();
	private double firstLeftThreshold=Configuration.getFirstLeftThreshold();
	private double secondLeftThreshold=Configuration.getSecondLeftThreshold();
	
	public double getCenterBiaseThreshold() {
		return centerBiaseThreshold;
	}
	public void setCenterBiaseThreshold(double centerBiaseThreshold) {
		this.centerBiaseThreshold = centerBiaseThreshold;
	}
	public double getLRAangleThreshold() {
		return lRAangleThreshold;
	}
	public void setLRAangleThreshold(double lRAangleThreshold) {
		this.lRAangleThreshold = lRAangleThreshold;
	}
	public double getFBAangleThreshold() {
		return fBAangleThreshold;
	}
	public void setFBAangleThreshold(double fBAangleThreshold) {
		this.fBAangleThreshold = fBAangleThreshold;
	}
	public double getPressThreshold() {
		return pressThreshold;
	}
	public void setPressThreshold(double pressThreshold) {
		this.pressThreshold = pressThreshold;
	}
	public double getFirstLeftThreshold() {
		return firstLeftThreshold;
	}
	public void setFirstLeftThreshold(double firstLeftThreshold) {
		this.firstLeftThreshold = firstLeftThreshold;
	}
	public double getSecondLeftThreshold() {
		return secondLeftThreshold;
	}
	public void setSecondLeftThreshold(double secondLeftThreshold) {
		this.secondLeftThreshold = secondLeftThreshold;
	}
	public String getTrainId() {
		return trainId;
	}
	public void setTrainId(String trainId) {
		this.trainId = trainId;
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
	public String getDuanNo() {
		return duanNo;
	}
	public void setDuanNo(String duanNo) {
		this.duanNo = duanNo;
	}
	public String getPlaneNo() {
		return planeNo;
	}
	public void setPlaneNo(String planeNo) {
		this.planeNo = planeNo;
	}
	public List<Train> getTrainList() {
		return trainList;
	}
	public void setTrainList(List<Train> trainList) {
		this.trainList = trainList;
	}
	@Override
	public void setServletRequest(HttpServletRequest request) {
		this.request=request;
	}
	//数据分析磨耗统计
	public String abrasion(){
		HttpServletResponse response=ServletActionContext.getResponse();
		response.setCharacterEncoding("utf-8");
		HttpSession session=request.getSession();
		List <Train> selectedList=new ArrayList<Train>();
		selectedList=trainDao.showselectPlaneNO();
		session.setAttribute("selectedList", selectedList);
		
		List <Train> showselectTrainNO=new ArrayList<Train>();
		showselectTrainNO=trainDao.showselectTrainNO();
		session.setAttribute("showselectTrainNO", showselectTrainNO);
		
		List<Carbon> carbonList=new ArrayList<Carbon>();
		carbonList=trainDao.showCarbonchart(trainId, firstDate, lastDate, duanNo, planeNo);
		String carbonChartData = JSONArray.fromObject(carbonList).toString();
		session.setAttribute("json", carbonChartData);
		return "abrasion";
	}
	//数据分析倾斜统计
	public String lean(){
		
		HttpServletResponse response=ServletActionContext.getResponse();
		response.setCharacterEncoding("utf-8");
		HttpSession session=request.getSession();
		List <Train> selectedList=new ArrayList<Train>();
		selectedList=trainDao.showselectPlaneNO();
		session.setAttribute("selectedList", selectedList);
		
		List <Train> showselectTrainNO=new ArrayList<Train>();
		showselectTrainNO=trainDao.showselectTrainNO();
		session.setAttribute("showselectTrainNO", showselectTrainNO);
		
		List <Chart_lean> leanList=new ArrayList<Chart_lean>();
		leanList=trainDao.showLeanchart(trainId, firstDate, lastDate, duanNo, planeNo);
		String leanListData = JSONArray.fromObject(leanList).toString();
		session.setAttribute("json", leanListData);
		
		
		return "lean";
	}
	//数据分析偏移统计
	public String offset(){
		HttpServletResponse response=ServletActionContext.getResponse();
		response.setCharacterEncoding("utf-8");
		HttpSession session=request.getSession();
		List <Train> selectedList=new ArrayList<Train>();
		selectedList=trainDao.showselectPlaneNO();
		session.setAttribute("selectedList", selectedList);
		
		List <Train> showselectTrainNO=new ArrayList<Train>();
		showselectTrainNO=trainDao.showselectTrainNO();
		session.setAttribute("showselectTrainNO", showselectTrainNO);
		
		List <Chart_center> cenerList=new ArrayList<Chart_center>();
		cenerList=trainDao.showCenterchart(trainId, firstDate, lastDate, duanNo, planeNo);
		String cenerListData = JSONArray.fromObject(cenerList).toString();
		session.setAttribute("json", cenerListData);
		return "offset";
	}
	//数据分析压力统计
	public String press(){
		HttpServletResponse response=ServletActionContext.getResponse();
		response.setCharacterEncoding("utf-8");
		HttpSession session=request.getSession();
		List <Train> selectedList=new ArrayList<Train>();
		selectedList=trainDao.showselectPlaneNO();
		session.setAttribute("selectedList", selectedList);
		
		List <Train> showselectTrainNO=new ArrayList<Train>();
		showselectTrainNO=trainDao.showselectTrainNO();
		session.setAttribute("showselectTrainNO", showselectTrainNO);
		
		
		List <Chart_press> pressList=new ArrayList<Chart_press>();
		pressList=trainDao.showPresschart(trainId, firstDate, lastDate, duanNo, planeNo);
		String pressListData = JSONArray.fromObject(pressList).toString();
		session.setAttribute("json", pressListData);
		
		return "press";
	}
}
