<!-- Left side column. contains the logo and sidebar -->
<aside class="main-sidebar">

    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">

        <!-- Sidebar Menu -->
        <ul class="sidebar-menu">
            <li class="header">MAIN MENU</li>
            <!-- Optionally, you can add icons to the links -->
            <li <?php if (in_array("home", $activer)) {
                echo "class='active'";
            } ?> ><a href="{{ url('home') }}"><i class='fa fa-home'></i>
                    <span>{{ trans('adminlte_lang::message.home') }}</span></a></li>
            <li <?php if (in_array("file", $activer)) { echo "class='active'"; } ?>>
                <a href="javascript:void(0)"><i class='fa fa-file'></i> <span>FILE MANAGEMENT</span> <i
                            class="fa fa-angle-left pull-right"></i></a>
                <ul class="treeview-menu">
                    <li <?php if (in_array("project", $activer)) { echo "class='active'";} ?> ><a href="/projects"><i class='fa fa-tags'></i> <span>PROJECT</span></a></li>
                    <li <?php if (in_array("issue", $activer)) { echo "class='active'";} ?>><a href="/issue"><i class='fa fa-newspaper-o'></i> <span>ISSUE</span></a></li>
                    <li <?php if (in_array("history", $activer)) { echo "class='active'";} ?>><a href="/history"><i class='fa fa-history'></i> <span>HISTORY</span></a></li>
                    <li <?php if (in_array("published", $activer)) { echo "class='active'";} ?>><a href="/published"><i class='fa fa-plane'></i> <span>PUBLISHED</span></a></li>
                </ul>
            </li>
            <li <?php if (in_array("user management", $activer)) { echo "class='active'"; } ?>>
                <a href="javascript:void(0)"><i class='fa fa-user'></i> <span>USER MANAGEMENT</span> <i
                            class="fa fa-angle-left pull-right"></i></a>
                <ul class="treeview-menu">
                    <li <?php if (in_array("user", $activer)) { echo "class='active'";} ?> ><a href="/user"><i class='fa fa-users'></i> <span>USER</span></a></li>
                    <li <?php if (in_array("add user", $activer)) { echo "class='active'";} ?>><a href="/registration"><i class='fa fa-user-plus'></i> <span>ADD USER</span></a></li>

                </ul>
            </li>
            <li <?php if (in_array("subscribe", $activer)) { echo "class='active'"; } ?>>
                <a href="javascript:void(0)"><i class='fa fa-newspaper-o'></i> <span>SUBSCRIBE MANAGEMENT</span> <i
                            class="fa fa-angle-left pull-right"></i></a>
                <ul class="treeview-menu">
                    <li <?php if (in_array("subscribe service", $activer)) { echo "class='active'";} ?> ><a href="/services"><i class='fa fa-newspaper-o'></i> <span>SUBSCRIBE SERVICE</span></a></li>
                    <li <?php if (in_array("add subscriber", $activer)) { echo "class='active'";} ?>><a href="/new-subscribe"><i class='fa fa-sign-in'></i> <span>ADD CLIENT</span></a></li>
                    <li <?php if (in_array("subscriber list", $activer)) { echo "class='active'";} ?>><a href="/client"><i class='fa fa-list-alt'></i> <span>CLIENT LIST</span></a></li>
                    <li <?php if (in_array("invoice", $activer)) { echo "class='active'";} ?>><a href="/invoice-list"><i class='fa fa-money'></i> <span>INVOICE</span></a></li>

                </ul>
            </li>
        </ul><!-- /.sidebar-menu -->
    </section>
    <!-- /.sidebar -->
</aside>
