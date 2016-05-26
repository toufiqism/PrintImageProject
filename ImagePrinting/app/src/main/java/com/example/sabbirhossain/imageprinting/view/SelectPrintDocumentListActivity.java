package com.example.sabbirhossain.imageprinting.view;

import android.content.ComponentName;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.CheckBox;
import android.widget.Toast;

import com.example.sabbirhossain.imageprinting.R;
import com.example.sabbirhossain.imageprinting.utility.AppConstant;

public class SelectPrintDocumentListActivity extends AppCompatActivity {

    CheckBox customerPhoto, customerId, nomineePhoto, nomineeId;
    Button proceedBtn, cancel;
    String TAG = "SelectPrintDocumentListActivity";

    @Override
    protected void onCreate(final Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_select_print_document_list);
        customerPhoto = (CheckBox) findViewById(R.id.customerPhoto);
        customerId = (CheckBox) findViewById(R.id.customerId);
        nomineeId = (CheckBox) findViewById(R.id.nomeneeId);
        nomineePhoto = (CheckBox) findViewById(R.id.nomineePhoto);
        cancel = (Button) findViewById(R.id.cancel);


        proceedBtn = (Button) findViewById(R.id.proceed);
        proceedBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                if (customerId.isChecked() || customerPhoto.isChecked() || nomineeId.isChecked() || nomineePhoto.isChecked()) {

                    if (customerId.isChecked()) {
                        AppConstant.customerIdFlag = true;
                    }
                    if (customerPhoto.isChecked()) {
                        AppConstant.customerPhotoFlag = true;

                    }
                    if (nomineeId.isChecked()) {
                        AppConstant.nomineeIdFlag = true;

                    }
                    if (nomineePhoto.isChecked()) {
                        AppConstant.nomineePhotoFlag = true;

                    }
                    Intent intent = new Intent(SelectPrintDocumentListActivity.this, CaptureDocumentsActivity.class);
                    startActivity(intent);
                    finish();
                } else {
                    Toast.makeText(SelectPrintDocumentListActivity.this, "select something", Toast.LENGTH_LONG).show();
                }


            }
        });

        cancel.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                System.exit(1);
            }
        });
       /* PackageManager p = getPackageManager();
        ComponentName componentName = new ComponentName(this, SelectPrintDocumentListActivity.class); // activity which is first time open in manifiest file which is declare as <category android:name="android.intent.category.LAUNCHER" />
        p.setComponentEnabledSetting(componentName, PackageManager.COMPONENT_ENABLED_STATE_DISABLED, PackageManager.DONT_KILL_APP);
        *//*PackageManager p = getPackageManager();
        ComponentName componentName = new ComponentName(this, com.apps.MainActivity.class);
        p.setComponentEnabledSetting(componentName, PackageManager.COMPONENT_ENABLED_STATE_ENABLED, PackageManager.DONT_KILL_APP);*/

    }

    @Override
    protected void onResume() {
        super.onResume();
     /*   android.os.Process.killProcess(android.os.Process.myPid());
        System.exit(0);
        Intent homeIntent = new Intent(Intent.ACTION_MAIN);
        homeIntent.addCategory(Intent.CATEGORY_HOME);
        homeIntent.setFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP);
        startActivity(homeIntent);*/
    }

    @Override
    public void onBackPressed() {

    }
}
