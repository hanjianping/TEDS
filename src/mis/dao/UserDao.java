package mis.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import mis.entity.User;

public interface UserDao {
	public User existUser(@Param("id")String id,@Param("password")String password);
	public List<User> findUserList(@Param("pageNum")Integer pageNum,@Param("pageSize")int pageSize,@Param("id")String id,@Param("realName")String realName,@Param("depart")String depart);
	public int findUserListCount(@Param("pageNum")Integer pageNum,@Param("pageSize")int pageSize,@Param("id")String id,@Param("realName")String realName,@Param("depart")String depart);
	public List<User> showselectDepart();
	public void modifyUser(User user);
	public void delete(@Param("id")String id);
	public void modifyPWD(@Param("id")String id,@Param("newPWD")String newPWD);
	public User existUserByUserID(@Param("id")String id);
	public void addUser(User user);
}
