<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Models\Member;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use Ramsey\Uuid\Uuid;

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        return Inertia::render('Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $request->user()->fill($request->validated());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $request->user()->save();

        return Redirect::route('profile.edit');
    }

    /**
     * Update the user's membership information.
     */
    public function updateMember(Request $request): RedirectResponse
    {
        // $request->user()->fill($request->validated());

        $user = Auth::user();
        $member_id = Uuid::uuid4()->toString();

        if ($request->is_member == 1 && $user->is_member == 0) {
            Member::create([
                'member_id' => $member_id,
                'level_id' => '1',
                'user_id' => $user->user_id,
            ]);

            DB::table('users')->where('user_id', $user->user_id)->update([
                'is_member' => $request->is_member,
            ]);
        } else if($request->is_member == 0 && $user->is_member == 1) {
            DB::table('members')->where('user_id', $user->user_id)->delete();

            DB::table('users')->where('user_id', $user->user_id)->update([
                'is_member' => $request->is_member,
            ]);
        }

        return Redirect::route('profile.edit');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current-password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}
