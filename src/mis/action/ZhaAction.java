package mis.action;

import com.opensymphony.xwork2.ActionSupport;
import mis.dao.TrainBoxDao;
import mis.dao.TrainDao;
import mis.entity.Carbon;
import mis.entity.Train;
import mis.entity.TrainBox;
import mis.util.Configuration;
import net.sf.json.JSONArray;
import org.apache.struts2.ServletActionContext;
import org.apache.struts2.interceptor.ServletRequestAware;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import mis.entity.PageBean;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Administrator on 2017/12/8.
 */
public class ZhaAction extends ActionSupport implements ServletRequestAware {
    @Autowired
    TrainBoxDao trainBoxDao;
    private HttpServletRequest request;
    @Override
    public void setServletRequest(HttpServletRequest request) {
        this.request=request;
    }
    private String pageCode;
    private String trainId;
    private String lastDate;
    private String firstDate;
    private String brakeNO;
    private String trainboxIndex;
    private List<TrainBox> trainList= new ArrayList<TrainBox>();//声明一个train的集合

    public List<TrainBox> getTrainList() {
        return trainList;
    }

    public void setTrainList(List<TrainBox> trainList) {
        this.trainList = trainList;
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

    public String getBrakeNO() {
        return brakeNO;
    }

    public void setBrakeNO(String brakeNO) {
        this.brakeNO = brakeNO;
    }

    public String getTrainboxIndex() {
        return trainboxIndex;
    }

    public void setTrainboxIndex(String trainboxIndex) {
        this.trainboxIndex = trainboxIndex;
    }

    public String getPageCode() {
        return pageCode;
    }

    public void setPageCode(String pageCode) {
        this.pageCode = pageCode;
    }

    public String newData(){
        HttpServletResponse response= ServletActionContext.getResponse();
        response.setCharacterEncoding("utf-8");
        HttpSession session=request.getSession();
        Integer pageNum=0;
        if(pageCode==null){
            pageNum=1;
        }else{
            pageNum=Integer.parseInt(pageCode);
        }
        int pageSize=Configuration.getPageSize();
        trainList=trainBoxDao.findTrainList((pageNum-1)*pageSize,pageSize,trainId,firstDate,lastDate,null);
        int trainBoxCout= trainBoxDao.getTrainListCount((pageNum-1)*pageSize,pageSize,trainId,firstDate,lastDate,null);
        PageBean pageBean=new PageBean(pageSize,pageNum,trainList,trainBoxCout);
        session.setAttribute("trainBoxId", trainId);
        session.setAttribute("pageBean", pageBean);
        return "newData";
    }
    public String historyData(){
        HttpServletResponse response= ServletActionContext.getResponse();
        response.setCharacterEncoding("utf-8");
        HttpSession session=request.getSession();
        Integer pageNum=0;
        if(pageCode==null){
            pageNum=1;
        }else{
            pageNum=Integer.parseInt(pageCode);
        }
        int pageSize=Configuration.getPageSize();
        trainList=trainBoxDao.findTrainList((pageNum-1)*pageSize,pageSize,trainId,firstDate,lastDate,null);
       int trainBoxCout= trainBoxDao.getTrainListCount((pageNum-1)*pageSize,pageSize,trainId,firstDate,lastDate,null);
        PageBean pageBean=new PageBean(pageSize,pageNum,trainList,trainBoxCout);
        session.setAttribute("pageBean", pageBean);
        List <TrainBox> showselectTrainNO=new ArrayList<TrainBox>();
        showselectTrainNO=trainBoxDao.showselectTrainNO();
        session.setAttribute("showselectTrainNO", showselectTrainNO);
        return "historyData";
    }
    public String analyseTime(){
        /*
        HttpServletResponse response= ServletActionContext.getResponse();
        response.setCharacterEncoding("utf-8");
        HttpSession session=request.getSession();
        List <TrainBox> selectedList=new ArrayList<TrainBox>();
        selectedList=trainBoxDao.showselectPlaneNO();
        session.setAttribute("selectedList", selectedList);

        List <TrainBox> showselectTrainNO=new ArrayList<TrainBox>();
        showselectTrainNO=trainBoxDao.showselectTrainNO();
        session.setAttribute("showselectTrainNO", showselectTrainNO);

        List<Carbon> carbonList=new ArrayList<Carbon>();
      //  carbonList=trainBoxDao.showCarbonchart(trainboxIndex, firstDate, lastDate, duanNo, planeNo);
        String carbonChartData = JSONArray.fromObject(carbonList).toString();
        session.setAttribute("json", carbonChartData);
    */
        return "analyseTime";
    }
    public String analyseMiles(){
        return "analyseMiles";
    }
    //系统当日状态
    public String currentStatus(){

        return "currentStatus";
    }
    //系统历史状态
    public String historyStatus(){

        return "historyStatus";
    }
    //系统状态统计
    public String countStatus(){
        return "countStatus";
    }

}
