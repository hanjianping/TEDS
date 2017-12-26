package mis.entity;
import java.util.List;

/**
 * 
 */
public class PageBean {
    // 传递的参数或是配置的参数
    /** 每页显示多少条记录 */
    private int pageSize;
    /** 当前页 */
    private int currentPage;

    // 查询数据库
    /** 本页的数据列表 */
    private List recordList;
    /** 总记录数 */
    private int recordCount;

    // 计算
    /** 总页数 */
    private int pageCount;
    /** 页码列表的开始索引（包含） */
    private int beginPageIndex;
    /** 页码列表的结束索引（包含） */
    private int endPageIndex;

    /**
     * 只接受4个必要的属性，会自动的计算出其他3个属性的值
     *
     * @param pageSize
     *            每页显示多少条记录
     * @param currentPage
     *            当前页
     * @param recordList
     *            本页的数据列表
     * @param recordCount
     *            总记录数
     */

    public PageBean(int pageSize, int currentPage, List recordList,
                    int recordCount) {
        this.pageSize = pageSize;
        this.currentPage = currentPage;
        this.recordList = recordList;
        this.recordCount = recordCount;

        pageCount = (recordCount + pageSize - 1) / pageSize;

        // 计算 beginPageIndex 与 endPageIndex
        // >> 总页码小于等于10页时，全部显示
        if (pageCount <= 10) {
            beginPageIndex = 1;
            endPageIndex = pageCount;
        }
        // >> 总页码大于10页时，就只显示当前页附近的共10个页码
        else {
            // 默认显示 前4页 + 当前页 + 后5页
            beginPageIndex = currentPage - 4; // 7 - 4 = 3;
            endPageIndex = currentPage + 5; // 7 + 5 = 12; --> 3 ~ 12

            // 如果前面不足4个页码时，则显示前10页
            if (beginPageIndex < 1) {
                beginPageIndex = 1;
                endPageIndex = 10;
            }
            // 如果后面不足5个页码时，则显示后10页
            else if (endPageIndex > pageCount) {
                endPageIndex = pageCount;
                beginPageIndex = pageCount - 9;
            }
        }
    }

    public int getPageSize() {
        return pageSize;
    }

    public void setPageSize(int pageSize) {
        this.pageSize = pageSize;
    }

    public int getCurrentPage() {
        return currentPage;
    }

    public void setCurrentPage(int currentPage) {
        this.currentPage = currentPage;
    }

    public List getRecordList() {
        return recordList;
    }

    public void setRecordList(List recordList) {
        this.recordList = recordList;
    }

    public int getRecordCount() {
        return recordCount;
    }

    public void setRecordCount(int recordCount) {
        this.recordCount = recordCount;
    }

    public int getPageCount() {
        return pageCount;
    }

    public void setPageCount(int pageCount) {
        this.pageCount = pageCount;
    }

    public int getBeginPageIndex() {
        return beginPageIndex;
    }

    public void setBeginPageIndex(int beginPageIndex) {
        this.beginPageIndex = beginPageIndex;
    }

    public int getEndPageIndex() {
        return endPageIndex;
    }

    public void setEndPageIndex(int endPageIndex) {
        this.endPageIndex = endPageIndex;
    }
}