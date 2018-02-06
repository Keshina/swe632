import java.io.IOException;


@WebServlet("/DiaryServlet")
public class DiaryServlet extends HttpServlet {

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String userName= request.getParameter("username");
        String password= request.getParameter("password");

        System.out.println("HERE!!=================>"+userName);
        System.out.println("HERE!!=================>"+password);
        if(userName.equals("swe632")&& password.equals("note")){
            System.out.println("THERE!!=================>");

            response.sendRedirect("notes.jsp");
            System.out.println("Kesina reached");
        }

    }
}
