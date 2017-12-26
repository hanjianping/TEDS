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

import mis.dao.UserDao;
import mis.entity.PageBean;
import mis.entity.Train;
import mis.entity.User;
import mis.util.Configuration;
@Controller
public class UserAction extends ActionSupport implements ServletRequestAware{

	/**
	 * 
	 */
	@Autowired
	UserDao userDao;
	private static final long serialVersionUID = 1L;
	private HttpServletRequest request;
	private User user;
	private String error1;
	private String error2;
	private String imgCode1;
	private String imageCode;
	private String pageCode;
	private String id;
	private String depart;
	private String realName;
	private String posi;
	private String userId;
	private String newPWD;
	private String info;
	private String addUserInfo;
	
	public String getAddUserInfo() {
		return addUserInfo;
	}
	public void setAddUserInfo(String addUserInfo) {
		this.addUserInfo = addUserInfo;
	}
	public String getInfo() {
		return info;
	}
	public void setInfo(String info) {
		this.info = info;
	}
	public String getNewPWD() {
		return newPWD;
	}
	public void setNewPWD(String newPWD) {
		this.newPWD = newPWD;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getPosi() {
		return posi;
	}
	public void setPosi(String posi) {
		this.posi = posi;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getDepart() {
		return depart;
	}
	public void setDepart(String depart) {
		this.depart = depart;
	}
	public String getRealName() {
		return realName;
	}
	public void setRealName(String realName) {
		this.realName = realName;
	}
	public String getPageCode() {
		return pageCode;
	}
	public void setPageCode(String pageCode) {
		this.pageCode = pageCode;
	}
	private List<User> userlist=new ArrayList<User>();
	
	public List<User> getUserlist() {
		return userlist;
	}
	public void setUserlist(List<User> userlist) {
		this.userlist = userlist;
	}
	public String getImageCode() {
		return imageCode;
	}
	public void setImageCode(String imageCode) {
		this.imageCode = imageCode;
	}
	public String getImgCode1() {
		return imgCode1;
	}
	public void setImgCode1(String imgCode1)
	{
		this.imgCode1 = imgCode1;
	}
	public String getError2() {
		return error2;
	}
	public void setError2(String error2) {
		this.error2 = error2;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public String getError1() {
		return error1;
	}
	public void setError1(String error1) {
		this.error1 = error1;
	}
	@Override
	public void setServletRequest(HttpServletRequest request) {
		this.request=request;
		
	}
	 public String reVerify()throws Exception{
		 HttpServletResponse response = ServletActionContext.getResponse();
		response.setCharacterEncoding("utf-8");
		 User userIdExist=userDao.existUser(user.getId(), user.getPassword());
		 if(userIdExist == null){
			 error1="用户名或者密码不正确";
			 return "reerror";
			}
			return "verify";
		}
	 
		public String verifyImgCode()throws Exception{
			HttpServletResponse response = ServletActionContext.getResponse();
			response.setCharacterEncoding("utf-8");
			HttpSession session=request.getSession();
			if(!imgCode1.equals(session.getAttribute("sRand"))){
				error2="验证码有误";
				return "reerror1";
			}else {
				error2="imgCodeMatch";
			}
			return "verifyimgCode";
	}
	public String login(){
		HttpServletResponse response = ServletActionContext.getResponse();
		response.setCharacterEncoding("utf-8");
		HttpSession session=request.getSession();
		User userIdExist=userDao.existUser(user.getId(),null);
		session.setAttribute("currentUser",userIdExist);
		
    	return "login";
    }
	public String list(){
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
		userlist=userDao.findUserList((pageNum-1)*pageSize,pageSize, id, realName, depart);
		int count=userDao.findUserListCount((pageNum-1)*pageSize,pageSize, id, realName, depart);
		PageBean pageBean=new PageBean(pageSize,pageNum,userlist,count);
		session.setAttribute("pageBean", pageBean);
		
		List <User> selectedList=new ArrayList<User>();
		selectedList=userDao.showselectDepart();
		session.setAttribute("selectedList", selectedList);
		return "list";
	}
	//管理员修改用户
	public String modifyUser(){
		System.out.println(user.getId());
		userDao.modifyUser(user);
		return "modifyUser";
	}
	//管理员删除用户
	public String delete(){
		
		userDao.delete(id);
		return null;
	}
	//用户注销登陆
	public String logout(){
		request.getSession().invalidate();
		return "logout";
}
	//用户修改密码
	public String modifyPWD(){
		System.out.println(newPWD);
		userDao.modifyPWD(id, newPWD);
		info="success";
		return "modifyPWD";
	}
	public String add(){
		HttpServletResponse response=ServletActionContext.getResponse();
		response.setCharacterEncoding("utf-8");
		HttpSession session=request.getSession();
		List <User> selectedList=new ArrayList<User>();
		selectedList=userDao.showselectDepart();
		session.setAttribute("selectedList", selectedList);
		return "add";
	}
	
	 public String existUser()throws Exception{
		 HttpServletResponse response = ServletActionContext.getResponse();
		response.setCharacterEncoding("utf-8");
		 User userIdExist=userDao.existUserByUserID(id);
		 if(userIdExist == null){
			 error1="success";
			 return "existUser";
			}
		  error1="false";
			return "verifyUser";
		}
	 public String addUser(){
		
		 if(user !=null){
		 userDao.addUser(user);
		 addUserInfo="success";
		 return "addUser";
	 }else{
		 addUserInfo="false";
		 return "addUser1";
	 }
	}
}
