package com.netcracker.lazarev.tms.service;

import com.netcracker.lazarev.tms.model.Page;
import com.netcracker.lazarev.tms.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.HashSet;
import java.util.Set;

@Service("customUserDetailsService")
public class UserService implements UserDetailsService {

    private RestTemplate restTemplate;
    @Value("${backend.url}")
    private String backendURL;
    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    public UserService(RestTemplateBuilder builder) {
        this.restTemplate = builder.build();
    }

    public User get(Long id) {
        return restTemplate.getForObject(backendURL + "users/" + id, User.class);
    }

    public User getByEmail(String login) {
        return restTemplate.getForObject(backendURL + "users/email/" + login, User.class);
    }

    public Page<User> getAll(Integer page, Integer size, String sort, String role) {
        return exchangeAsPAge(backendURL + "users" + getPageQuery(page, size, sort,role), new ParameterizedTypeReference<Page<User>>() {});
    }

    public User create(User user) {
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        return restTemplate.postForObject(backendURL + "users/", user, User.class);
    }

    public void update(User user, Long id) {
        restTemplate.put(backendURL + "users/" + id, user);
    }

    public void delete(Long id) {
        restTemplate.delete(backendURL + "users/" + id);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = getByEmail(username);
        if (user == null) {
            throw new UsernameNotFoundException("Invalid username or password.");
        }
        return new org.springframework.security.core.userdetails.User(user.getEmail(), user.getPassword(),
                getAuthority(user));
    }

    private Set<SimpleGrantedAuthority> getAuthority(User user) {
        Set<SimpleGrantedAuthority> authorities = new HashSet<>();
        authorities.add(new SimpleGrantedAuthority( user.getRole()));
        return authorities;
    }
    private String getPageQuery(Integer page, Integer size, String sort, String role){
        String params;
        if(page==null && size==null && sort==null){
            if(role==null){
                params="";
            }else{
                params="?role="+role;
            }
        }else{
            params="?page="+page+"&size="+size+"&sort="+sort+"&role"+role;
        }
        return params;
    }
    public <T> Page<T> exchangeAsPAge(String uri, ParameterizedTypeReference<Page<T>> responseType) {
        return restTemplate.exchange(uri, HttpMethod.GET, null, responseType).getBody();
    }
}
