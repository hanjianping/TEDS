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

import mis.entity.PageBean;
import mis.entity.Threshold;
import mis.dao.TrainDao;
import mis.entity.Train;
import mis.util.Configuration;

@Controller
public class CurrentAction extends ActionSupport implements ServletRequestAware{

	/**
	 * author:hjp
	 */
	@Autowired
	TrainDao trainDao;
	
	private static final long serialVersionUID = 1L;
	
	private HttpServletRequest request;
	
	private int status; //列车状态
	private List<Train> trainList= new ArrayList<Train>();//声明一个train的集合
	private Train train;
	private String trainId;
	private String pageCode;
	private String checkflag;
	private String trainState;
	private String board;
	private String lean;
	private String line;
	private String press;
	private String printState;//是否打印标志 1代表打印 0代表不打印
	private String isCurrentData;
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

	public String getIsCurrentData() {
		return isCurrentData;
	}

	public void setIsCurrentData(String isCurrentData) {
		this.isCurrentData = isCurrentData;
	}

	public String getPrintState() {
		return printState;
	}

	public void setPrintState(String printState) {
		this.printState = printState;
	}

	public String getPress() {
		return press;
	}

	public void setPress(String press) {
		this.press = press;
	}

	public String getLine() {
		return line;
	}

	public void setLine(String line) {
		this.line = line;
	}

	public String getLean() {
		return lean;
	}

	public void setLean(String lean) {
		this.lean = lean;
	}

	public String getBoard() {
		return board;
	}

	public void setBoard(String board) {
		this.board = board;
	}

	public String getTrainState() {
		return trainState;
	}

	public void setTrainState(String trainState) {
		this.trainState = trainState;
	}

	public String getCheckflag() {
		return checkflag;
	}

	public void setCheckflag(String checkflag) {
		this.checkflag = checkflag;
	}

	public String getPageCode() {
		return pageCode;
	}

	public void setPageCode(String pageCode) {
		this.pageCode = pageCode;
	}

	public String getTrainId() {
		return trainId;
	}

	public void setTrainId(String trainId) {
		this.trainId = trainId;
	}

	public Train getTrain() {
		return train;
	}

	public void setTrain(Train train) {
		this.train = train;
	}

	public List<Train> getTrainList() {
		return trainList;
	}

	public void setTrainList(List<Train> trainList) {
		this.trainList = trainList;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	@Override
	public void setServletRequest(HttpServletRequest request) {
		this.request=request;
		
	}
	//综合数据
	public String all() throws Exception{
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
		trainList=trainDao.findTrainList((pageNum-1)*pageSize,pageSize,trainId,null,null,trainState,null,null,null,null,null,null,isCurrentData);
		int count=trainDao.getTrainListCount((pageNum-1)*pageSize,pageSize,trainId,null,null,trainState,null,null,null,null,null,null,isCurrentData);
		PageBean pageBean=new PageBean(pageSize,pageNum,trainList,count);
		session.setAttribute("pageBean", pageBean);
		//显示TrainNo的下拉列表
		List <Train> showselectTrainNO=new ArrayList<Train>();
		showselectTrainNO=trainDao.showselectTrainNO();
		session.setAttribute("showselectTrainNO", showselectTrainNO);
	
		//打印数据 ||导入excel表格的数据
		List <Train> printData=new ArrayList<Train>();
		printData=trainDao.printData(trainId, null, null, trainState, null, null, null, null, null, null,isCurrentData);
		session.setAttribute("printData", printData);

		return "all";
	}
	//滑板磨耗
	public String board(){
		HttpServletResponse response=ServletActionContext.getResponse();
		response.setCharacterEncoding("utf-8");
		HttpSession session=request.getSession();
		Integer pageNum=0;
		isCurrentData="1";
		if(pageCode==null){
			pageNum=1;
		}else{
			pageNum=Integer.parseInt(pageCode);
		}
		int pageSize=Configuration.getPageSize();
		 trainList=trainDao.findTrainList((pageNum-1)*pageSize,pageSize,trainId,null,null,null,board,null,null,null,null,null,isCurrentData);
		int count=trainDao.getTrainListCount((pageNum-1)*pageSize,pageSize,trainId,null,null,null,board,null,null,null,null,null,isCurrentData);
		PageBean pageBean=new PageBean(pageSize,pageNum,trainList,count);
		session.setAttribute("pageBean", pageBean);
		
		List <Train> showselectTrainNO=new ArrayList<Train>();
		showselectTrainNO=trainDao.showselectTrainNO();
		session.setAttribute("showselectTrainNO", showselectTrainNO);
		
		//打印数据 ||导入excel表格的数据
		List <Train> printData=new ArrayList<Train>();
		printData=trainDao.printData(trainId, null, null, null, board, null, null, null, null, null,isCurrentData);
		session.setAttribute("printData", printData);
		return "board";
	}
	//中心线偏移
	public String line(){
		HttpServletResponse response=ServletActionContext.getResponse();
		response.setCharacterEncoding("utf-8");
		HttpSession session=request.getSession();
		isCurrentData="1";
		Integer pageNum=0;
		if(pageCode==null){
			pageNum=1;
		}else{
			pageNum=Integer.parseInt(pageCode);
		}
		int pageSize=Configuration.getPageSize();
		 trainList=trainDao.findTrainList((pageNum-1)*pageSize,pageSize,trainId,null,null,null,null,null,line,null,null,null,isCurrentData);
			int count=trainDao.getTrainListCount((pageNum-1)*pageSize,pageSize,trainId,null,null,null,null,null,line,null,null,null,isCurrentData);
		PageBean pageBean=new PageBean(pageSize,pageNum,trainList,count);
		session.setAttribute("pageBean", pageBean);
		
		List <Train> showselectTrainNO=new ArrayList<Train>();
		showselectTrainNO=trainDao.showselectTrainNO();
		session.setAttribute("showselectTrainNO", showselectTrainNO);
		
		//打印数据 ||导入excel表格的数据
		List <Train> printData=new ArrayList<Train>();
		printData=trainDao.printData(trainId, null, null, null, null, null, line, null, null, null,isCurrentData);
		session.setAttribute("printData", printData);
		return "line";
	}
	//受电弓倾斜
	public String lean(){
		HttpServletResponse response=ServletActionContext.getResponse();
		response.setCharacterEncoding("utf-8");
		HttpSession session=request.getSession();
		Integer pageNum=0;
		isCurrentData="1";
		if(pageCode==null){
			pageNum=1;
		}else{
			pageNum=Integer.parseInt(pageCode);
		}
		int pageSize=Configuration.getPageSize();
		 trainList=trainDao.findTrainList((pageNum-1)*pageSize,pageSize,trainId,null,null,null,null,lean,null,null,null,null,isCurrentData);
		int count=trainDao.getTrainListCount((pageNum-1)*pageSize,pageSize,trainId,null,null,null,null,lean,null,null,null,null,isCurrentData);
		PageBean pageBean=new PageBean(pageSize,pageNum,trainList,count);
		session.setAttribute("pageBean", pageBean);
		
		List <Train> showselectTrainNO=new ArrayList<Train>();
		showselectTrainNO=trainDao.showselectTrainNO();
		session.setAttribute("showselectTrainNO", showselectTrainNO);
		
		//打印数据 ||导入excel表格的数据
		List <Train> printData=new ArrayList<Train>();
		printData=trainDao.printData(trainId, null, null, null, null, lean, null, null, null, null,isCurrentData);
		session.setAttribute("printData", printData);
		return "lean";
	}
	public String press(){
		HttpServletResponse response=ServletActionContext.getResponse();
		response.setCharacterEncoding("utf-8");
		HttpSession session=request.getSession();
		isCurrentData="1";
		Integer pageNum=0;
		if(pageCode==null){
			pageNum=1;
		}else{
			pageNum=Integer.parseInt(pageCode);
		}
		int pageSize=Configuration.getPageSize();
		 trainList=trainDao.findTrainList((pageNum-1)*pageSize,pageSize,trainId,null,null,null,null,null,null,press,null,null,isCurrentData);
		int count=trainDao.getTrainListCount((pageNum-1)*pageSize,pageSize,trainId,null,null,null,null,null,null,press,null,null,isCurrentData);
		PageBean pageBean=new PageBean(pageSize,pageNum,trainList,count);
		session.setAttribute("pageBean", pageBean);
		
		List <Train> showselectTrainNO=new ArrayList<Train>();
		showselectTrainNO=trainDao.showselectTrainNO();
		session.setAttribute("showselectTrainNO", showselectTrainNO);
		
		//打印数据 ||导入excel表格的数据
		List <Train> printData=new ArrayList<Train>();
		printData=trainDao.printData(trainId, null, null, null, null, null, null, press, null, null,isCurrentData);
		session.setAttribute("printData", printData);
		return "press";
	}
}
