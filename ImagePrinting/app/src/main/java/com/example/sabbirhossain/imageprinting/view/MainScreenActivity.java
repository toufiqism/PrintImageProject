package com.example.sabbirhossain.imageprinting.view;

import android.content.pm.PackageManager;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.TextView;

import com.example.sabbirhossain.imageprinting.R;

/**
 * Created by Toufiq on 5/26/16.
 */
public class MainScreenActivity extends AppCompatActivity {

    TextView txtBuildNumber;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_mainscreen);
        init();
        action();
        PackageManager pm = getApplicationContext().getPackageManager();
        pm.setComponentEnabledSetting(getComponentName(), PackageManager.COMPONENT_ENABLED_STATE_DISABLED, PackageManager.DONT_KILL_APP);


    }

    private void action() {
        txtBuildNumber.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                System.exit(1);
            }
        });

    }

    private void init() {
        txtBuildNumber = (TextView) findViewById(R.id.txtBuildNumber);
    }
}
