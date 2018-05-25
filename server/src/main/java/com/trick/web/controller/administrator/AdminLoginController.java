package com.trick.web.controller.administrator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import com.trick.common.ResponseState;
import com.trick.persistence.entities.Admin;
import com.trick.persistence.service.AdminService;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Introduce.
 */
@Controller
@RequestMapping("/api/admin")
public class AdminLoginController {
    @Autowired
    AdminService adminService;

    /**
     * 登录操作
     * 1. 验证 adminname, password 域不为空
     * 2. 调用adminService服务验证 用户名-密码是否对应
     *  - adminname 可以是 用户名／手机号／email
     * 3. 返回登陆结果
     * @param request
     * @param response
     * @return
     */
    @PostMapping(value = "/login")
    @ResponseBody
    public ResponseState loginPostMethod(HttpServletRequest request,
                                         HttpServletResponse response) {
        String adminName = request.getParameter("adminname");
        String password = request.getParameter("password");
        if (adminName == null || password == null) {
            return new ResponseState(ResponseState.ERROR, "用户名或密码为空");
        }

        if (!"".equals(adminName) && !"".equals(password)) {
            Admin admin = adminService.verify(adminName, password);
            if (admin != null) {
                request.getSession().setAttribute("admin", admin);
                return new ResponseState(ResponseState.SUCCESS);
            }


        }
        return new ResponseState(ResponseState.ERROR, "用户名或密码错误");
    }

    @PutMapping(value = "/logout")
    @ResponseBody
    public ResponseState logoutPostMethod(HttpServletRequest request,
                                          HttpServletResponse response) {
        Admin admin = (Admin)request.getSession().getAttribute("admin");

        if (admin == null) {
            return new ResponseState(ResponseState.ERROR, "不可重复登出");
        } else {
            request.removeAttribute("admin");
            request.getSession().invalidate();
            return new ResponseState(ResponseState.SUCCESS);
        }
    }
}
