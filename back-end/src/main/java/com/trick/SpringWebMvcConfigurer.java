package com.trick;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import com.trick.web.interceptor.AdminInterceptor;
import com.trick.web.interceptor.UserInterceptor;

/**
 * Introduce.
 */
@Configuration
public class SpringWebMvcConfigurer extends WebMvcConfigurerAdapter {
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        // 添加拦截规则
        // 只有用户登录过后才能访问 user/目录下资源
        registry.addInterceptor(new UserInterceptor()).addPathPatterns
                ("/api/user/**");

        /**
         * 只有登录管理员账号后才能访问管理员目录
         * 例外：管理员登录路径 /api/admin/login
         */
        registry.addInterceptor(new AdminInterceptor()).addPathPatterns
                ("/api/admin/**").excludePathPatterns("/api/admin/login");
        super.addInterceptors(registry);
    }
}
