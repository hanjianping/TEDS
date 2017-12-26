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
import mis.entity.Chart_device;
import mis.entity.Chart_press;
import mis.entity.Device;
import mis.entity.PageBean;
import mis.util.Configuration;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

@Controller
public class StatusAction extends ActionSupport implements ServletRequestAware{

	/**
	 * 
	 */
	@Autowired
	TrainDao trainDao;
	private static final long serialVersionUID = 1L;
	private HttpServletRequest request;
	private String pageCode;
	private String lastDate;
	private String firstDate;
	private String checkflag;
	private String devId;
	private List<Device> deviceList= new ArrayList<Device>();//声明一个device的集合
	private double devTemp=Configuration.getDevTempThreshold(); //机箱温度A
	private double devTempB=Configuration.getDevTempBThreshold();   //机箱温度B
	private double cpuTemp=Configuration.getCpuTempThreshold();    //cpu温度
	private String isCurrentData;
	
	public String getIsCurrentData() {
		return isCurrentData;
	}
	public void setIsCurrentData(String isCurrentData) {
		this.isCurrentData = isCurrentData;
	}
	public double getDevTemp() {
		return devTemp;
	}
	public void setDevTemp(double devTemp) {
		this.devTemp = devTemp;
	}
	public double getDevTempB() {
		return devTempB;
	}
	public void setDevTempB(double devTempB) {
		this.devTempB = devTempB;
	}
	public double getCpuTemp() {
		return cpuTemp;
	}
	public void setCpuTemp(double cpuTemp) {
		this.cpuTemp = cpuTemp;
	}
	public List<Device> getDeviceList() {
		return deviceList;
	}
	public void setDeviceList(List<Device> deviceList) {
		this.deviceList = deviceList;
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
	public String getCheckflag() {
		return checkflag;
	}
	public void setCheckflag(String checkflag) {
		this.checkflag = checkflag;
	}
	public String getDevId() {
		return devId;
	}
	public void setDevId(String devId) {
		this.devId = devId;
	}
	@Override
	public void setServletRequest(HttpServletRequest request) {
		this.request=request;
		
	}
	//系统当日状态
	public String currentStatus(){
		HttpServletResponse response=ServletActionContext.getResponse();
		response.setCharacterEncoding("utf-8");
		HttpSession session=request.getSession();
		Integer pageNum=0;
		if(pageCode==null){
			pageNum=1;
		}else{
			pageNum=Integer.parseInt(pageCode);
		}
		int pageSize=Configuration.getPageSize();
		isCurrentData="1";
		 deviceList=trainDao.findDeviceList((pageNum-1)*pageSize,pageSize,devId,null,null,isCurrentData);
		int count=trainDao.getDeviceListCount((pageNum-1)*pageSize,pageSize,devId,null,null,isCurrentData);
		PageBean pageBean=new PageBean(pageSize,pageNum,deviceList,count);
		session.setAttribute("pageBean", pageBean);
		//设备下拉列表数据
		List <Device> selectedDev =new ArrayList<Device>();
		selectedDev=trainDao.selectedDevice();
		session.setAttribute("selectedDev", selectedDev);
		
		//打印数据
		List <Device> printData =new ArrayList<Device>();
		printData=trainDao.printDeviceDate(devId,null,null,isCurrentData);
		session.setAttribute("printData", printData);
		
		return "currentStatus";
	} 
	//系统历史状态
	public String historyStatus(){
		HttpServletResponse response=ServletActionContext.getResponse();
		response.setCharacterEncoding("utf-8");
		HttpSession session=request.getSession();
		Integer pageNum=0;
		if(pageCode==null){
			pageNum=1;
		}else{
			pageNum=Integer.parseInt(pageCode);
		}
		int pageSize=Configuration.getPageSize();
		 deviceList=trainDao.findDeviceList((pageNum-1)*pageSize,pageSize,devId,firstDate,lastDate,null);
		int count=trainDao.getDeviceListCount((pageNum-1)*pageSize,pageSize,devId,firstDate,lastDate,null);
		PageBean pageBean=new PageBean(pageSize,pageNum,deviceList,count);
		session.setAttribute("pageBean", pageBean);
		List <Device> selectedDev =new ArrayList<Device>();
		selectedDev=trainDao.selectedDevice();
		session.setAttribute("selectedDev", selectedDev);
		//打印数据
		List <Device> printData =new ArrayList<Device>();
		printData=trainDao.printDeviceDate(devId, firstDate, lastDate,null);
		session.setAttribute("printData", printData);		
		
		return "historyStatus";
	}
	//系统状态统计
	public String countStatus(){
		HttpServletResponse response=ServletActionContext.getResponse();
		response.setCharacterEncoding("utf-8");
		HttpSession session=request.getSession();
		List <Device> selectedDev =new ArrayList<Device>();
		selectedDev=trainDao.selectedDevice();
		session.setAttribute("selectedDev", selectedDev);
		
		List <Chart_device> deviceList=new ArrayList<Chart_device>();
		deviceList=trainDao.showDevicechart(devId, firstDate, lastDate);
		String deviceListData = JSONArray.fromObject(deviceList).toString();
		session.setAttribute("json", deviceListData);
		
		return "countStatus";
	}

}
