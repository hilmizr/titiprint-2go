<?php
namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class CheckUserRole 
{
    public function handle($request, Closure $next)
    {
        $user = Auth::user();
        if ($user->role === 'admin') {
            return redirect()->route('admin.dashboard');
        }

        // Default to customer dashboard
        return redirect()->route('customer.dashboard');
    }
}
